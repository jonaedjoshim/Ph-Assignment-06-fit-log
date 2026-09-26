# FitLog

FitLog is a responsive workout library and planning application built with Next.js. It allows users to explore workouts, view exercise details, create a daily workout plan, save workouts for later, and track workout statistics.

## Live Demo

[Visit FitLog](https://fit-log-next.vercel.app/)

## Features

- Browse workouts from the FitLog API
- View detailed workout information and instructions
- Add up to five workouts to Today's Plan
- Save workouts for later
- Track total exercises, minutes, and calories
- Sort workouts by duration, calories, and rating
- Mark planned workouts as done
- Remove workouts from Plan and Saved lists
- Persist workout data using localStorage
- Live Plan and Saved counters
- Toast notifications for user actions
- Responsive design for mobile, tablet, and desktop
- Loading, empty, error, and custom 404 states

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- Local Storage
- FitLog REST API

## API

All Workouts:

https://api.abcz.workers.dev/api/fitlog

Single Workout:

https://api.abcz.workers.dev/api/fitlog/:id

## Routes

- `/` - Workout Library
- `/workouts/:id` - Workout Details
- `/my-plan` - Today's Plan and Saved Workouts