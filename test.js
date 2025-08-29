
const testCases = [
    {
        name: "Example A",
        input: ["a","1","334","4","R", "$"],
        expected: {
            odd_numbers: ["1"],
            even_numbers: ["334","4"],
            alphabets: ["A","R"],
            special_characters: ["$"],
            sum: "339",
            concat_string: "ra"
        }
    },
    {
        name: "Example B",
        input: ["2","a", "y", "4", "&", "-", "*", "5","92","b"],
        expected: {
            odd_numbers: ["5"],
            even_numbers: ["2","4","92"],
            alphabets: ["A", "Y", "B"],
            special_characters: ["&", "-", "*"],
            sum: "103",
            concat_string: "byA"
        }
    },
    {
        name: "Example C",
        input: ["A","ABcD","DOE"],
        expected: {
            odd_numbers: [],
            even_numbers: [],
            alphabets: ["A","ABCD","DOE"],
            special_characters: [],
            sum: "0",
            concat_string: "eoDdCbAa"
        }
    }
];

async function runTests() {
    console.log('Running API tests...\n');
    
    for (const testCase of testCases) {
        console.log(`Testing: ${testCase.name}`);
        console.log(`Input: ${JSON.stringify(testCase.input)}`);
        
        try {
            const response = await fetch('http://localhost:3000/bfhl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: testCase.input })
            });
            
            const result = await response.json();
            
            console.log(`Response: ${JSON.stringify(result, null, 2)}`);
            console.log('---\n');
            
        } catch (error) {
            console.error(`Error testing ${testCase.name}:`, error.message);
        }
    }
}

async function checkServerAndRunTests() {
    try {
        const healthResponse = await fetch('http://localhost:3000/health');
        if (healthResponse.ok) {
            await runTests();
        } else {
            console.log('Server is not responding. Please start the server first with: npm start');
        }
    } catch (error) {
        console.log('Server is not running. Please start the server first with: npm start');
        console.log('Then run: npm test');
    }
}

checkServerAndRunTests();