using Core.Entities;

namespace Application.Interfaces
{
    public interface IWorkItemRepository
    {
        Task<WorkItem> AddWorkItem(WorkItem workItem);
        Task<List<WorkItem>> GetAllWorkItems();
    }
}