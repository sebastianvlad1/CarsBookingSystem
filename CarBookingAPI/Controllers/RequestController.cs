using System;
using CarBookingAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarBookingAPI.Controllers{
    [ApiController]
    [Route("api/[controller]")]
    public class RequestController: ControllerBase{
        [HttpPost("addrequest")]
        public ActionResult addRequest([FromForm] FormRequest formReq){
            
            return Ok();
        }
    }
}