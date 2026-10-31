import {test} from 'node:test';
import assert from 'node:assert/strict';
import {lessons} from './lessons.ts';
test('unique routes and three valid questions per lesson',()=>{assert.equal(new Set(lessons.map(l=>l.id)).size,lessons.length);for(const lesson of lessons){assert.equal(lesson.questions.length,3);assert.ok(lesson.explanations.length>=3);assert.ok(lesson.examples.length>=2);for(const e of lesson.examples){assert.ok(e.pattern&&e.analysis&&e.note);}for(const q of lesson.questions){assert.ok(q.answer>=0&&q.answer<q.options.length);assert.ok(q.explanation&&q.hint);assert.equal(new Set(q.options).size,q.options.length);}}});
