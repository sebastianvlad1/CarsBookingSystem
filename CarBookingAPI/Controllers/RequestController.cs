using System;
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
            _service.Create(formReq);
            return Ok();
        }
    }
}