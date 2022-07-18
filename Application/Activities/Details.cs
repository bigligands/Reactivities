using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Details // A single activity
    {
        public class Query : IRequest<Activity> // Create Query which requests an Activity
        {
            public Guid Id { get; set; } 
        }
        public class Handler : IRequestHandler<Query, Activity> // Create a Handler which takes a 
        {
            private readonly DataContext _context; 

            public Handler(DataContext context) // inject datacontext
            {
                _context = context;
            }

            public async Task<Activity> Handle(Query queryRequest, CancellationToken cancellationToken)
            {
                return await _context.Activities.FindAsync(queryRequest.Id) ?? new Activity();
            }
        }
    }
}