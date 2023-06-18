import { describe, expect, test } from '@jest/globals';
import { NewStatusHandlers } from './NewStatusHandlers.ts';

describe('New Status Handlers', () =>{
    describe('Malarkey Level',() =>{
        describe('status.content contains "malarkey level"', () =>{
            test('Should call masto.v2.mediaAttachments.create with media blob and description', () =>{

            });
            test('Should call masto.v1.statuses.create with inReplyToId of status.id, status with a valid status, and a mediaIds', () =>{

            });
            test('Should be called regardless of case', () =>{

            });
        });
        describe('status.content does not contains "malarkey level"', () =>{
            test('Should not call masto.v2.mediaAttachments.create with media blob and description', () =>{

            });
            test('Should not call masto.v1.statuses.create with inReplyToId of status.id, status with a valid status, and a mediaIds', () =>{

            });
        });
    });
})
