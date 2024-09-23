using Application.Interfaces;
using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class WorkItemRepository : IWorkItemRepository
    {
        private readonly ApplicationDbContext _context;

        public WorkItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<WorkItem>> GetAllWorkItems()
        {
            return await _context.WorkItems.ToListAsync();
        }

        public async Task<WorkItem> AddWorkItem(WorkItem workItem)
        {
            _context.WorkItems.Add(workItem);
            await _context.SaveChangesAsync();
            return workItem;
        }
    }
}