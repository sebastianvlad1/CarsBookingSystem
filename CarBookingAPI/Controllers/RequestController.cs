using System;
using System.Collections.Generic;
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
    }
}