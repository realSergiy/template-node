# LeetCode Solutions in TypeScript

A collection of algorithm implementations, data structures, and LeetCode problem solutions written
in TypeScript.

## Project Structure

```text
src/
├── algo/          # Sorting algorithms
├── problems/      # LeetCode problem solutions
├── structures/    # Data structure implementations
└── utils/         # Utility functions

test/
├── algo/          # Algorithm tests
├── problems/      # Problem solution tests
├── structures/    # Data structure tests
├── performance/   # Performance benchmarks
└── fixtures.ts    # Test fixtures and utilities
```

## Running Tests

This project uses Playwright Test Runner for all testing.

```bash
# Run all tests
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests in debug mode
pnpm test:debug

# Run tests in headed mode (visible browser)
pnpm test:headed

# Generate HTML report
pnpm test:html
```

## Test Organization

Tests are organized using Playwright's fixtures system for better reusability and organization:

- **Performance fixtures**: `measured` for timing measurements
- **Random data fixtures**: `randomUtils` for generating test data
- **Custom assertions**: `expectWithinTolerance` for performance testing

## Development

- **TypeScript**: Strongly typed codebase
- **Path mapping**: Clean imports using `@/` aliases
- **Performance testing**: Timing assertions with tolerance
- **Test isolation**: Each test runs independently

## Features

- Sorting algorithms (insertion, merge, quick sort)
- Data structures (heap, priority queue, dictionary)
- LeetCode problem solutions with comprehensive tests
- Performance benchmarking and timing validation
