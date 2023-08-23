const { create, read, update, delete: deleteFunc } = require('../../../backend/lambdas/crud/handler');

describe('Reservation CRUD Lambda', () => {

    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();
    });

    it('creates a reservation', async () => {
        // Mock event and context
        const event = {
            body: JSON.stringify({ firstName: 'Sriram', lastName: 'Narra' }) // sample data
        };
        const context = {};


        const mockDbCall = jest.fn();
        mockDbCall.mockResolvedValue({ /* mock return value */ });

        const response = await create(event, context);

        expect(response.statusCode).toBe(200);
        expect(mockDbCall).toHaveBeenCalled();
    });

    it('reads a reservation', async () => {
        const event = {
            pathParameters: { id: '1' }
        };
        const context = {};

        const response = await read(event, context);

        expect(response.statusCode).toBe(200);
    });

    it('updates a reservation', async () => {
        const event = {
            pathParameters: { id: '1' },
            body: JSON.stringify({ firstName: 'Sriram' }) // sample update data
        };
        const context = {};

        const response = await update(event, context);

        expect(response.statusCode).toBe(200);
    });

    it('deletes a reservation', async () => {
        const event = {
            pathParameters: { id: '1' }
        };
        const context = {};

        const response = await deleteFunc(event, context);

        expect(response.statusCode).toBe(200);
    });
});
