using Core.Entities;

namespace Application.Interfaces
{
    public interface IWorkItemService
    {
        Task<List<WorkItem>> GetAllWorkItems();
        Task<WorkItem> AddWorkItem(WorkItem workItem);
    }
}