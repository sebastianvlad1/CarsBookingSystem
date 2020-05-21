using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using AutoMapper;
using CarBookingAPI.Models;
using CarBookingAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace CarBookingAPI.Controllers{
    [ApiController]
    [Route("api/[controller]")]
    public class RequestController: ControllerBase{
        private readonly RequestsService _service;
        private readonly IMapper _mapper;
        public RequestController(RequestsService service, IMapper mapper){
            _service = service;
            _mapper = mapper;
        }
        [HttpPost("addrequest")]
        public ActionResult addRequest([FromForm] FormRequest formReq){
            formReq.status = "New";
            _service.Create(formReq);
            return Ok();
        }
        [HttpPost("addcar")]
        public ActionResult addCar([FromForm]Car car){
            _service.CreateCar(car);
            return Ok();
        }
        [HttpPost("editrequest")]
        public ActionResult editRequest([FromForm] EditRequest editReq){
            Console.WriteLine("am primit id: " + editReq.Id);
            Console.WriteLine("am primit status: " + editReq.status);
            var result = _service.editRequest(editReq);
            Console.WriteLine(result.UpsertedId);
            return Ok();
        }
        [HttpGet("getall/{filter?}")]
        public List<FormRequest> getAllRequests([FromRoute]string filter = ""){
            return _service.GetAll(filter);
        }
        [HttpGet("getallcars")]
        public List<Car> getAllCars(){
            return _service.GetAllCars();
        }
        [HttpGet("getallusers")]
        public List<UserDTO> getAllUsers(){
            List<UserDTO> list = new List<UserDTO>();
            List<User> users =  _service.GetAllUsers();
            foreach(User user in users){
                list.Add(_mapper.Map<UserDTO>(user));
            }
            return list;
        }
        [HttpGet("getnumbers")]
        public ActionResult getNumbers(){
            var obj =_service.getNumbers();
            return Ok(obj);
        }
        [HttpPost("filtercars")]
        public ActionResult filterCars([FromForm]filterCarsForm form){
            string dateP = form.pickupTime;
            string dateR = form.returnTime;
            List<Car> allCars = new List<Car>();
            List<FormRequest> requests = new List<FormRequest>();
            allCars = _service.GetAllCars();
            requests = _service.GetReqByDate(form.pickupDate);
            Console.WriteLine(form.pickupDate);
            Console.WriteLine("Am gasit:" + requests.Count);
            DateTime dateTimePickup = DateTime.ParseExact(form.pickupTime, "HH:mm",
                                        CultureInfo.InvariantCulture);
            DateTime dateTimeReturn = DateTime.ParseExact(form.returnTime, "HH:mm",
                                        CultureInfo.InvariantCulture);


            do{
                Console.WriteLine(dateP);
                foreach(FormRequest req in requests){
                    if(req.pickupTime == dateP){
                        Console.WriteLine("egal");
                        Car car = allCars.Single(r => r.nr_inmatriculare == req.car);
                        allCars.Remove(car);
                        foreach(var c in allCars){
                            Console.WriteLine(c.nr_inmatriculare);
                        }
                    }
                }
                DateTime newDate = DateTime.ParseExact(dateP, "HH:mm",
                                        CultureInfo.InvariantCulture).AddHours(0.5);
                dateP = newDate.ToString("HH:mm", CultureInfo.CurrentCulture);
                Console.WriteLine("-----------");
            }while(dateP.CompareTo(dateR) != 0);

            return Ok(allCars);
        }
    }
}