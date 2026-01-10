using PedroArruda.Portfolio.Api.Models;

namespace PedroArruda.Portfolio.Api.Services;

public interface IPortfolioService
{
    Developer GetDeveloper();
    IEnumerable<SkillCategory> GetSkillCategories();
    IEnumerable<Project> GetProjects();
    IEnumerable<Project> GetFeaturedProjects();
    Project? GetProjectBySlug(string slug);
    ContactInfo GetContactInfo();
    Task<ContactResponse> SendContactMessageAsync(ContactMessage message);
}
