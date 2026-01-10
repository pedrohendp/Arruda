namespace PedroArruda.Portfolio.Api.Models;

public record PortfolioData
{
    public Developer Developer { get; init; } = new();
    public List<SkillCategory> SkillCategories { get; init; } = [];
    public List<Project> Projects { get; init; } = [];
}
