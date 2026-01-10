namespace PedroArruda.Portfolio.Api.Models;

public record SkillCategory
{
    public string Name { get; init; } = string.Empty;
    public string Color { get; init; } = string.Empty;
    public string HttpMethod { get; init; } = string.Empty;
    public List<Skill> Skills { get; init; } = [];
}

public record Skill
{
    public string Name { get; init; } = string.Empty;
    public int Level { get; init; }
    public string Icon { get; init; } = string.Empty;
}
