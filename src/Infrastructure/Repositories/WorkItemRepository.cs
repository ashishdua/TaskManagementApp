using Application.Interfaces;
using Core.Entities;

namespace Infrastructure.Repositories
{
    public class WorkItemRepository : IWorkItemRepository
    {
        private readonly List<WorkItem> _workItems = new List<WorkItem>();
        public Task<List<WorkItem>> GetAllWorkItems()
        {
            return Task.FromResult(_workItems.ToList());
        }

        public Task<WorkItem> AddWorkItem(WorkItem workItem)
        {
            _workItems.Add(workItem);
            return Task.FromResult(workItem);
        }
    }
}