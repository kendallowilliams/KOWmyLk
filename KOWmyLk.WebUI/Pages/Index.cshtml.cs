using KOWmyLk.WebUI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace KOWmyLk.WebUI.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly IWebHostEnvironment _env;

        public IndexModel(ILogger<IndexModel> logger, IWebHostEnvironment env)
        {
            _logger = logger;
            _env = env;
            KOWMoosicCarouselImages = Enumerable.Empty<CarouselImage>();
        }


        public IEnumerable<CarouselImage> KOWMoosicCarouselImages { get; set; }

        public void OnGet()
        {
            string kowMoosicImagesPath = Path.Combine(_env.WebRootPath, "images", "KOWMoosic");

            var kowMoosicCarouselImages = new List<CarouselImage>()
            {
                new CarouselImage()
                {
                    Path = Path.Combine(kowMoosicImagesPath, "0_Music_Albums.png"),
                    Title = "Albums",
                    Subtitle = "",
                    Url = Path.Combine("images", "KOWMoosic", "0_Music_Albums.png")
                },new CarouselImage()
                {
                    Path = Path.Combine(kowMoosicImagesPath, "0_Music_Artists.png"),
                    Title = "Artists",
                    Subtitle = "",
                    Url = Path.Combine("images", "KOWMoosic", "0_Music_Artists.png")
                },new CarouselImage()
                {
                    Path = Path.Combine(kowMoosicImagesPath, "0_Music_Songs.png"),
                    Title = "Songs",
                    Subtitle = "",
                    Url = Path.Combine("images", "KOWMoosic", "0_Music_Songs.png")
                },new CarouselImage()
                {
                    Path = Path.Combine(kowMoosicImagesPath, "0_Music_Darkmode.png"),
                    Title = "Dark Mode",
                    Subtitle = "",
                    IsLightMode = true,
                    Url = Path.Combine("images", "KOWMoosic", "0_Music_Darkmode.png")
                },new CarouselImage()
                {
                    Path = Path.Combine(kowMoosicImagesPath, "1_Podcasts.png"),
                    Title = "Podcasts",
                    Subtitle = "",
                    Url = Path.Combine("images", "KOWMoosic", "1_Podcasts.png")
                },new CarouselImage()
                {
                    Path = Path.Combine(kowMoosicImagesPath, "2_Television.png"),
                    Title = "Television",
                    Subtitle = "",
                    Url = Path.Combine("images", "KOWMoosic", "2_Television.png")
                },new CarouselImage()
                {
                    Path = Path.Combine(kowMoosicImagesPath, "3_Playlists.png"),
                    Title = "Playlists",
                    Subtitle = "",
                    Url = Path.Combine("images", "KOWMoosic", "3_Playlists.png")
                },new CarouselImage()
                {
                    Path = Path.Combine(kowMoosicImagesPath, "4_Player.png"),
                    Title = "Player",
                    Subtitle = "",
                    Url = Path.Combine("images", "KOWMoosic", "4_Player.png")
                }
            };

            kowMoosicCarouselImages.ForEach((item) => item.Index = kowMoosicCarouselImages.IndexOf(item));
            KOWMoosicCarouselImages = kowMoosicCarouselImages;
        }
    }
}