using Microsoft.AspNetCore.Mvc;
using WizardRecords.Dtos;
using WizardRecords.Repositories;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlbumController : ControllerBase
    {
        private readonly IAlbumRepository _albumRepository;

        public AlbumController(IAlbumRepository albumRepository)
        {
            _albumRepository = albumRepository;
        }

        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<AlbumDetails>>> GetAllAlbums()
        {
            var albums = (await _albumRepository.GetAllAlbumsAsync())
                .Select(a => new AlbumDetails(
                a.Id,
                a.ArtistId,
                a.LabelId,
                a.Title,
                a.StockQuantity,
                a.Price,
                a.Category,
                a.Media,
                a.Format,
                a.AlbumGenre,
                a.MediaGrade,
                a.SleeveGrade,
                a.CatalogNumber,
                a.MatrixNumber,
                a.Comments,
                a.ImageFilePath
            )).ToList();

            return Ok(albums);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AlbumDetails>> GetAlbumById(Guid id)
        {
            try
            {
                var album = await _albumRepository.GetAlbumByIdAsync(id);

                if (album != null)
                {
                    return Ok(new AlbumDetails(
                        album.Id,
                        album.ArtistId,
                        album.LabelId,
                        album.Title,
                        album.StockQuantity,
                        album.Price,
                        album.Category,
                        album.Media,
                        album.Format,
                        album.AlbumGenre,
                        album.MediaGrade,
                        album.SleeveGrade,
                        album.CatalogNumber,
                        album.MatrixNumber,
                        album.Comments,
                        album.ImageFilePath
                    ));
                }
                else
                {
                    return NotFound($"Album with ID {id} not found.");
                }
            }
            catch (Exception ex)
            {
                return Problem($"An error occurred while fetching the album: {ex.Message}");
            }
        }

        [HttpGet("random")]
        public async Task<ActionResult<AlbumDetails>> GetRandomAlbum([FromQuery] MediaType mediaType)
        {
            try
            {
                var album = await _albumRepository.GetRandomAlbumAsync(mediaType);

                if (album != null)
                {
                    return Ok(new AlbumDetails(
                        album.Id,
                        album.ArtistId,
                        album.LabelId,
                        album.Title,
                        album.StockQuantity,
                        album.Price,
                        album.Category,
                        album.Media,
                        album.Format,
                        album.AlbumGenre,
                        album.MediaGrade,
                        album.SleeveGrade,
                        album.CatalogNumber,
                        album.MatrixNumber,
                        album.Comments,
                        album.ImageFilePath
                    ));
                }
                else
                {
                    return NotFound("No albums found.");
                }
            }
            catch (Exception ex)
            {
                return Problem($"An error occurred while fetching a random album: {ex.Message}");
            }
        }


        [HttpGet("mediaType")]
        public async Task<ActionResult<IEnumerable<AlbumDetails>>> GetAlbumsByMediaTypeAsync([FromQuery] MediaType mediaType)
        {
            try
            {
                var albums = await _albumRepository.GetAlbumsByMediaTypeAsync(mediaType);

                if (albums != null && albums.Any())
                {
                    var albumDetails = albums.Select(album =>
                    {
                        return new AlbumDetails(AlbumId: album.Id,
                                                       ArtistId: album.ArtistId,
                                                                                  LabelId: album.LabelId,
                                                                                                             Title: album.Title,
                                                                                                                                        StockQuantity: album.StockQuantity,
                                                                                                                                                                   Price: album.Price,
                                                                                                                                                                                              Category: album.Category,
                                                                                                                                                                                                                         Media: album.Media,
                                                                                                                                                                                                                                                    Format: album.Format,
                                                                                                                                                                                                                                                                               AlbumGenre: album.AlbumGenre,
                                                                                                                                                                                                                                                                                                          MediaGrade: album.MediaGrade,
                                                                                                                                                                                                                                                                                                                                     SleeveGrade: album.SleeveGrade,
                                                                                                                                                                                                                                                                                                                                                                CatalogNumber: album.CatalogNumber,
                                                                                                                                                                                                                                                                                                                                                                                           MatrixNumber: album.MatrixNumber,
                                                                                                                                                                                                                                                                                                                                                                                                                      Comments: album.Comments,
                                                                                                                                                                                                                                                                                                                                                                                                                                                 ImageFilePath: album.ImageFilePath
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        );

                    });

                    return Ok(albumDetails);
                }
                else
                {
                    return NotFound("No albums found.");
                }
            }
            catch (Exception ex)
            {
                return Problem($"An error occurred while fetching albums by media type: {ex.Message}");
            }
        }

    }
}