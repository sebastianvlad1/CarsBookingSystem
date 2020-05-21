using System;
using MongoDB.Bson.Serialization.Attributes;

namespace CarBookingAPI.Models
{
    public class filterCarsForm
    {
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime pickupDate {get; set;}
        public string pickupTime {get; set;}
        public string returnTime {get; set;}
    }
}