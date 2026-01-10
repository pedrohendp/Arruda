namespace PedroArruda.Portfolio.Api.Models;

public record ContactMessage
{
    public string Name { get; init; } = string.Empty;
    public string Email { get; init; } = string.Empty;
    public string Subject { get; init; } = string.Empty;
    public string Message { get; init; } = string.Empty;
}

public record ContactResponse
{
    public bool Success { get; init; }
    public string Message { get; init; } = string.Empty;
}

public record ContactInfo
{
    public string Email { get; init; } = string.Empty;
    public string LinkedIn { get; init; } = string.Empty;
    public string GitHub { get; init; } = string.Empty;
    public string Location { get; init; } = string.Empty;
}
