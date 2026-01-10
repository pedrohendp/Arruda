namespace PedroArruda.Portfolio.Api.Models;

public record Project
{
    public string Slug { get; init; } = string.Empty;
    public string Name { get; init; } = string.Empty;
    public string Description { get; init; } = string.Empty;
    public string LongDescription { get; init; } = string.Empty;
    public string ImageUrl { get; init; } = string.Empty;
    public string DemoUrl { get; init; } = string.Empty;
    public string GitHubUrl { get; init; } = string.Empty;
    public List<string> Technologies { get; init; } = [];
    public string Status { get; init; } = string.Empty;
    public bool Featured { get; init; }
}
