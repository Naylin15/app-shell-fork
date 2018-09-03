/*
 *  LICENSE
 *
 *  This file is part of app-shell
 *
 *  app-shell is a subproject of Teclib.
 *
 *  app-shell is free software: you can redistribute it and/or
 *  modify it under the terms of the GNU General Public License
 *  as published by the Free Software Foundation; either version 3
 *  of the License, or (at your option) any later version.
 *
 *  app-shell is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *  ------------------------------------------------------------------------------
 *  @author     Hector Rondon (hrondon@teclib.com)
 *  @copyright  Copyright © 2018 Teclib. All rights reserved.
 *  @license    GPLv3 https://www.gnu.org/licenses/gpl-3.0.html
 *  @link       https://github.com/TECLIB/app-shell
 *  @link       https://teclib.github.io/app-shell
 *  @link       https://teclib-edition.com/en
 *  ------------------------------------------------------------------------------
 */

/** import dependencies */
import EmptyMessage from 'components/EmptyMessage'
import asyncOverview from './async/asyncOverview'
import asyncContact from './async/asyncContact'
import asyncReleaseNotes from './async/asyncReleaseNotes'
import asyncTermsOfUse from './async/asyncTermsOfUse'
import asyncLicense from './async/asyncLicense'

/**
 * Represents all private routes from About
 * @constant
 * @type {Array}
 */
const routes = [{
  path: '/',
  name: 'commons.no_selection',
  component: EmptyMessage,
  exact: true,
},
{
  path: '/overview',
  name: 'about.overview.title',
  component: asyncOverview,
  exact: true,
},
{
  path: '/contact',
  name: 'about.contact.title',
  component: asyncContact,
  exact: true,
},
{
  path: '/release',
  name: 'about.release_notes.title',
  component: asyncReleaseNotes,
  exact: false,
},
{
  path: '/term',
  name: 'about.term_of_use.title',
  component: asyncTermsOfUse,
  exact: false,
},
{
  path: '/license',
  name: 'about.license.title',
  component: asyncLicense,
  exact: false,
},
]

export default routes
