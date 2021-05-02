interface Example {
    id: number,
    name: string,
    description: string
}

const example: Example = {
    id: 1,
    name: 'Example',
    description: 'This is an example'
};

test('Example test', (): void => {
    expect(example.id).toBe(1);
    expect(example.name).toBe('Example');
});