import re
import json

with open('lib/quiz-data.ts', 'r') as f:
    content = f.read()

# Extract the header and footer
match = re.search(r'(export const quizData: QuizQuestion\[\] = \[)(.*)(\];\s*export const totalQuestions)', content, re.DOTALL)
if not match:
    print("Could not find quizData array")
    exit(1)

header = match.group(1)
footer = match.group(3)

# This is a bit risky because it's not JSON, but let's try to find the objects
# They all start with { and end with } and are separated by commas
# We need to find the top-level objects in the array.
# Each object starts with { and id: N,

def extract_questions(text):
    questions = []
    # Find start of each object { id: ...
    # We'll use a simple stack to find the matching }
    pos = 0
    while True:
        start = text.find('{', pos)
        if start == -1: break
        
        # Check if it's a top-level object (id should follow closely)
        id_match = re.search(r'id:\s*(\d+)', text[start:start+50])
        if not id_match:
            pos = start + 1
            continue
            
        # Find matching }
        depth = 0
        end = -1
        for i in range(start, len(text)):
            if text[i] == '{': depth += 1
            elif text[i] == '}': 
                depth -= 1
                if depth == 0:
                    end = i
                    break
        if end != -1:
            q_text = text[start:end+1]
            q_id = int(id_match.group(1))
            questions.append((q_id, q_text))
            pos = end + 1
        else:
            break
    return questions

questions = extract_questions(match.group(2))
questions_by_id = {q[0]: q[1] for q in questions}

# New Order (Original IDs)
new_order_ids = [0, 1, 12, 2, 14, 3, 15, 5, 13, 6, 16, 7, 18, 8, 20, 9, 22, 10, 24, 11, 17, 4, 19, 21, 23, 25, 26, 27]

new_questions = []
for i, old_id in enumerate(new_order_ids):
    if old_id in questions_by_id:
        q_text = questions_by_id[old_id]
        # Update ID in the text
        q_text = re.sub(r'id:\s*\d+', f'id: {i}', q_text)
        new_questions.append(q_text)

new_array_content = '\n' + ',\n'.join(new_questions) + '\n'
new_content = content[:match.start(2)] + new_array_content + content[match.end(2):]

with open('lib/quiz-data.ts', 'w') as f:
    f.write(new_content)

print("Reshuffled successfully.")
