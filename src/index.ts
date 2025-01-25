/*
 * Copyright (c) 2024 Marcelo Hashimoto
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */

import { Renderer } from './renderer';

class Index {
    private readonly renderers: Map<number, Renderer>;

    public constructor() {
        this.renderers = new Map();
    }

    public start = (key: number): Renderer => {
        let renderer = this.renderers.get(key);
        if (typeof renderer === 'undefined') {
            renderer = new Renderer(key);
            this.renderers.set(key, renderer);
        }
        return renderer;
    };

    public stop = (key: number): void => {
        this.renderers.delete(key);
    };
}

export default new Index();
