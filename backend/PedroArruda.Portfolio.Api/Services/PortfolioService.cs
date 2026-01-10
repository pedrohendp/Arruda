using System.Text.Json;
using PedroArruda.Portfolio.Api.Models;

namespace PedroArruda.Portfolio.Api.Services;

public class PortfolioService : IPortfolioService
{
    private readonly PortfolioData _data;
    private readonly ILogger<PortfolioService> _logger;

    public PortfolioService(IWebHostEnvironment environment, ILogger<PortfolioService> logger)
    {
        _logger = logger;
        var jsonPath = Path.Combine(environment.ContentRootPath, "Data", "portfolio-data.json");

        var jsonOptions = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };

        try
        {
            var jsonContent = File.ReadAllText(jsonPath);
            _data = JsonSerializer.Deserialize<PortfolioData>(jsonContent, jsonOptions) ?? new PortfolioData();
            _logger.LogInformation("Portfolio data loaded successfully");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to load portfolio data from {Path}", jsonPath);
            _data = new PortfolioData();
        }
    }

    public Developer GetDeveloper() => _data.Developer;

    public IEnumerable<SkillCategory> GetSkillCategories() => _data.SkillCategories;

    public IEnumerable<Project> GetProjects() => _data.Projects;

    public IEnumerable<Project> GetFeaturedProjects() => _data.Projects.Where(p => p.Featured);

    public Project? GetProjectBySlug(string slug) =>
        _data.Projects.FirstOrDefault(p => p.Slug.Equals(slug, StringComparison.OrdinalIgnoreCase));

    public ContactInfo GetContactInfo() => new()
    {
        Email = _data.Developer.Email,
        LinkedIn = _data.Developer.Social.LinkedIn,
        GitHub = _data.Developer.Social.GitHub,
        Location = _data.Developer.Location
    };

    public Task<ContactResponse> SendContactMessageAsync(ContactMessage message)
    {
        _logger.LogInformation(
            "Contact message received from {Name} ({Email}): {Subject}",
            message.Name,
            message.Email,
            message.Subject
        );

        // Em produção, aqui você implementaria o envio de email
        // Por enquanto, apenas logamos a mensagem
        return Task.FromResult(new ContactResponse
        {
            Success = true,
            Message = "Mensagem enviada com sucesso! Entrarei em contato em breve."
        });
    }
}
