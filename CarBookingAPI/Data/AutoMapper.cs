using AutoMapper;
using CarBookingAPI.Models;

namespace CarBookingAPI.Data
{  
    public class AutoMapperProfile : Profile  
    {  
        public AutoMapperProfile()  
        {  
            CreateMap<User, UserDTO>();  
        }  
    }  
} 