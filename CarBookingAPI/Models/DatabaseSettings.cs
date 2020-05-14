namespace CarBookingAPI.Models
{
    public class DatabaseSettings: IDatabaseSettings
    {
        public string RequestsCollectionName { get; set; }
        public string UsersCollectionName {get; set;}
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
    public interface IDatabaseSettings
    {
        string RequestsCollectionName { get; set; }

        string UsersCollectionName {get; set;}
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}