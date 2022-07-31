namespace KOWmyLk.WebUI.Models
{
    public class CarouselImage
    {
        public int Index { get; set; }

        public string Path { get; set; }

        public string Title { get; set; }

        public string Subtitle { get; set; }

        public string Url { get; set; }

        public string? Base64 
        { 
            get => !string.IsNullOrWhiteSpace(Path) && File.Exists(Path) ? 
                                        System.Convert.ToBase64String(File.ReadAllBytes(Path)) : 
                                        null; 
        }

        public bool IsLightMode { get; set; }
    }
}
