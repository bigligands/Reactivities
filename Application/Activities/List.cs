using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence; //dependency on entities

namespace Application.Activities
{
    public class List //List of activities
    {
        public class Query : IRequest<List<Activity>>{} //request with response List<Activity>
        public class Handler : IRequestHandler<Query, List<Activity>> //handler for request with request: Query, response: List<Activity>
        {
            private DataContext _context { get; }
            public Handler(DataContext context) //Dependency injection : inject context
            {
                _context = context;
            }
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.ToListAsync();//cancellationToken); Can pass cancellation token from the controller to
                //enable cancelling the server. Currently the cancellation token won't do anything.
            }
        }
    }
}