using System;
using System.Collections.Generic;
using CarBookingAPI.Models;
using CarBookingAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace CarBookingAPI.Controllers{
    [ApiController]
    [Route("api/[controller]")]
    public class RequestController: ControllerBase{
        private readonly RequestsService _service;
        public RequestController(RequestsService service){
            _service = service;
        }
        [HttpPost("addrequest")]
        public ActionResult addRequest([FromForm] FormRequest formReq){
            formReq.status = "New";
            _service.Create(formReq);
            return Ok();
        }
        [HttpGet("getall/{filter?}")]
        public List<FormRequest> getAllRequests([FromRoute]string filter = ""){
            return _service.GetAll(filter);
        }
        [HttpGet("getnumbers")]
        public ActionResult getNumbers(){
            var obj =_service.getNumbers();
            return Ok(obj);
        }
    }
}