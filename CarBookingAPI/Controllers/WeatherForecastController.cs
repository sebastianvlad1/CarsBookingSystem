using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CarBookingAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        [HttpGet("actiune/{id?}")]
        public string Get(int id = 0, [FromQuery] int ziua = 0)
        {   Console.WriteLine("id = " +  id);
            Console.WriteLine("ziua = " +  ziua);
            Console.WriteLine(" =========== ");
            return "workng...";
        }
    }
}
