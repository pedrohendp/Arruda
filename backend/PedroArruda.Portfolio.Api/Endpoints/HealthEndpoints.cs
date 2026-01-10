namespace PedroArruda.Portfolio.Api.Endpoints;

public static class HealthEndpoints
{
    public static void MapHealthEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/api/health", GetHealth)
            .WithTags("Health")
            .WithName("GetHealth")
            .WithSummary("Verifica o status da API")
            .WithOpenApi()
            .Produces<HealthResponse>(StatusCodes.Status200OK);
    }

    private static IResult GetHealth()
    {
        return Results.Ok(new HealthResponse
        {
            Status = "Healthy",
            Timestamp = DateTime.UtcNow,
            Version = "1.0.0"
        });
    }
}

public record HealthResponse
{
    public string Status { get; init; } = string.Empty;
    public DateTime Timestamp { get; init; }
    public string Version { get; init; } = string.Empty;
}
