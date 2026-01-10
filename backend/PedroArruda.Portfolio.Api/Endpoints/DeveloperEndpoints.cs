using PedroArruda.Portfolio.Api.Models;
using PedroArruda.Portfolio.Api.Services;

namespace PedroArruda.Portfolio.Api.Endpoints;

public static class DeveloperEndpoints
{
    public static void MapDeveloperEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/developer")
            .WithTags("Developer")
            .WithOpenApi();

        group.MapGet("/", GetDeveloper)
            .WithName("GetDeveloper")
            .WithSummary("Retorna os dados do desenvolvedor")
            .Produces<Developer>(StatusCodes.Status200OK);
    }

    private static IResult GetDeveloper(IPortfolioService service)
    {
        return Results.Ok(service.GetDeveloper());
    }
}
