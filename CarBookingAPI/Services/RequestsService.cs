using System.Collections.Generic;
using CarBookingAPI.Models;
using MongoDB.Driver;
using System;

namespace CarBookingAPI.Services{
    public class RequestsService{
        private readonly IMongoCollection<FormRequest> _requests;
        public RequestsService(IDatabaseSettings settings){
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _requests = database.GetCollection<FormRequest>(settings.RequestsCollectionName);
        }
        public List<FormRequest> GetAll(string filter){
            if(filter.Equals("")){
                return _requests.Find(_ => true).SortByDescending(e => e.Id).ToList();
            }
            return _requests.Find(req => true && req.status.Equals(filter)).SortByDescending(e => e.Id).ToList();

        }
        public void Create(FormRequest req){
            _requests.InsertOne(req);
        }
        public object getNumbers(){
            var total = _requests.Find(_ => true).CountDocuments();
            var accepted = _requests.Find(req => true && req.status.Equals("Accepted")).CountDocuments();
            var waiting = _requests.Find(req => true && req.status.Equals("Waiting")).CountDocuments();
            var cancelled = _requests.Find(req => true && req.status.Equals("Cancelled")).CountDocuments();
            return new {total,accepted,waiting,cancelled};
        }
    }
}