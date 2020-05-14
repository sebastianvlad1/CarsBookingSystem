using System;
using System.Collections.Generic;
using CarBookingAPI.Models;
using CarBookingAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace CarBookingAPI.Controllers{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController: ControllerBase{
        private readonly RequestsService _service;
        public AuthController(RequestsService service){
            _service = service;
        }
        
        [HttpPost("register")]
        public ActionResult Register([FromForm] User user){
            _service.CreateUser(user);
            return Ok();
        }
        [HttpPost("login")]
        public ActionResult Login([FromForm] User user){
           var res =  _service.Login(user);
           if(res == null){
               return BadRequest("Login failed");
           }else{
                return Ok();
           }
            
        }
    }
}