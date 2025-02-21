/*
 * Copyright (c) 2025 Marcelo Hashimoto
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */

import index from './index';

export class Handler {
    private readonly key: number;

    public constructor(key: number) {
        this.key = key;
    }

    public close = (): void => {
        index.stop(this.key);
    };
}
