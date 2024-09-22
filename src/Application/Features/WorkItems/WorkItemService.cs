using Application.Interfaces;
using Core.Entities;

namespace Application.Features.WorkItems
{
    public class WorkItemService : IWorkItemService
    {
        private readonly IWorkItemRepository _workItemRepository;

        public WorkItemService(IWorkItemRepository workItemRepository)
        {
            _workItemRepository = workItemRepository;
        }

        public async Task<List<WorkItem>> GetAllWorkItems()
        {
            return await _workItemRepository.GetAllWorkItems();
        }

        public async Task<WorkItem> AddWorkItem(WorkItem workItem)
        {
            return await _workItemRepository.AddWorkItem(workItem);
        }
    }
}