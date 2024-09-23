using Microsoft.EntityFrameworkCore;
using Core.Entities;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options) { }

    public DbSet<WorkItem> WorkItems { get; set; }
}
