namespace PedroArruda.Portfolio.Api.Models;

public record Developer
{
    public string Name { get; init; } = string.Empty;
    public string Title { get; init; } = string.Empty;
    public string Subtitle { get; init; } = string.Empty;
    public string Email { get; init; } = string.Empty;
    public string Bio { get; init; } = string.Empty;
    public string Location { get; init; } = string.Empty;
    public string Organization { get; init; } = string.Empty;
    public string ProfileImage { get; init; } = string.Empty;
    public string ResumeUrl { get; init; } = string.Empty;
    public SocialLinks Social { get; init; } = new();
    public DeveloperStats Stats { get; init; } = new();
}

public record SocialLinks
{
    public string LinkedIn { get; init; } = string.Empty;
    public string GitHub { get; init; } = string.Empty;
    public string Instagram { get; init; } = string.Empty;
    public string Twitter { get; init; } = string.Empty;
}

public record DeveloperStats
{
    public int YearsOfExperience { get; init; }
    public int ProjectsDelivered { get; init; }
    public int TechnologiesMastered { get; init; }
}
