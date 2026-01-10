using PedroArruda.Portfolio.Api.Models;
using PedroArruda.Portfolio.Api.Services;

namespace PedroArruda.Portfolio.Api.Endpoints;

public static class SkillsEndpoints
{
    public static void MapSkillsEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/skills")
            .WithTags("Skills")
            .WithOpenApi();

        group.MapGet("/", GetAllSkills)
            .WithName("GetAllSkills")
            .WithSummary("Retorna todas as categorias de skills")
            .Produces<IEnumerable<SkillCategory>>(StatusCodes.Status200OK);
    }

    private static IResult GetAllSkills(IPortfolioService service)
    {
        return Results.Ok(service.GetSkillCategories());
    }
}
