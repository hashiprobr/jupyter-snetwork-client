/*
 * Copyright (c) 2025 Marcelo Hashimoto
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */

import type { Channel } from 'jupyter-jchannel-client';

import { Handler } from './handler';

export class Renderer {
    private channel: null | Channel;
    private readonly handler: Handler;

    public constructor(key: number) {
        this.channel = null;
        this.handler = new Handler(key);
    }

    public open = (channel: Channel): void => {
        this.channel = channel;
        this.channel.handler = this.handler;
    };
}
