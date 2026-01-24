# DEPLOYMENT INSTRUCTIONS FOR COWORK
# Critical: Follow decision tree logic at each error point

## MISSION
Deploy yellowlights-deploy/ to existing Vercel project: yellowlights-portfolio
Project ID: prj_4XJcvkoE9FdklCvOxpRdaxMqmG9u
Team ID: team_fJAfx725lGZS80cFGk3Xzc5S

## PRE-EXECUTION CHECKLIST
Before taking ANY action, internally evaluate these 3 approaches and select the optimal one:

### Approach 1: Direct Vercel CLI deployment (RECOMMENDED)
- Pros: Fastest, most reliable, official Vercel tooling
- Cons: Requires Vercel CLI installation
- Risk level: LOW
- Decision: Use this if Vercel CLI available or can be installed

### Approach 2: Git + Vercel GitHub integration
- Pros: Standard workflow, allows rollbacks
- Cons: Requires git init, GitHub repo connection
- Risk level: MEDIUM
- Decision: Use if Approach 1 fails or is unavailable

### Approach 3: Manual file upload via Vercel API
- Pros: Always available as fallback
- Cons: More complex, potential for partial uploads
- Risk level: HIGH
- Decision: Only use as last resort

## EXECUTION STEPS

### Phase 1: Environment Setup
1. Check if Vercel CLI is installed: `vercel --version`
   - If not installed: `npm install -g vercel`
   - If installation fails: Document error and proceed to Approach 2

2. Navigate to deployment directory: `cd /home/claude/yellowlights-deploy`

3. Verify all files present:
   ```bash
   ls -la
   # Expected: App.tsx, components/, constants.tsx, index.html, index.tsx,
   #           package.json, services/, tsconfig.json, types.ts, vite.config.ts,
   #           vercel.json, .gitignore, README.md
   ```

### Phase 2: Deployment (Approach 1 - Vercel CLI)
1. Link to existing project:
   ```bash
   vercel link --project=yellowlights-portfolio --scope=traces-projects-217c48ee
   ```
   
   ERROR HANDLING:
   - If "project not found": Verify project ID with `vercel projects list`
   - If "authentication failed": Check if Vercel token is valid
   - If link succeeds: Continue to step 2
   - If link fails 2+ times: STOP, document errors, switch to Approach 2

2. Deploy to production:
   ```bash
   vercel --prod
   ```
   
   ERROR HANDLING:
   - If build fails with "framework detection" error:
     → Verify vercel.json is present and correct
     → Check package.json scripts are valid
     → Review build logs for specific error
   - If build fails with "dependency" error:
     → Run `npm install` locally to verify package.json
     → Check for missing dependencies
   - If build succeeds: Continue to Phase 3
   - If build fails 2+ times with same error: STOP, document pattern, evaluate alternatives

### Phase 3: Verification
1. Get deployment URL from output
2. Check deployment status:
   ```bash
   vercel inspect <deployment-url>
   ```
3. Verify domain connection:
   - Check if yellowlights.ai is connected to project
   - If not connected: This requires manual DNS verification (inform user)

### Phase 4: Smoke Testing
1. Visit deployment URL
2. Verify:
   - Page loads without console errors
   - All sections render (Hero, Laboratory, Archive, Journal, Inquiry)
   - Social links work (LinkedIn, GitHub)
   - DecisionLab shows graceful placeholder error when tested
   - Mobile menu toggles correctly

## ERROR RECOVERY DECISION TREE

### If build fails:
1. Read full error message
2. Categorize error type:
   - Framework/build config → Check vercel.json + vite.config.ts
   - Dependencies → Verify package.json + run `npm install` locally
   - TypeScript → Check tsconfig.json
   - Import errors → Verify all file paths
3. Before attempting fix:
   - Document error exactly
   - Identify 3 possible solutions
   - Evaluate each solution's risk
   - Select lowest-risk solution
   - Implement ONE change at a time
4. If same error occurs twice:
   - STOP attempting same solution
   - Document both attempts
   - Evaluate alternative approach
   - Report back to user if stuck

### If deployment succeeds but site doesn't work:
1. Check browser console for errors
2. Check Vercel deployment logs
3. Verify all assets loaded (no 404s)
4. Test one feature at a time to isolate issue

## CRITICAL RULES
1. ⚠️ NEVER make more than 3 consecutive attempts on same error
2. ⚠️ ALWAYS document error messages exactly before attempting fix
3. ⚠️ THINK before acting: evaluate 3 approaches, select best one
4. ⚠️ ONE change at a time (no shotgun debugging)
5. ⚠️ If stuck after 2 attempts: STOP and report back to user

## SUCCESS CRITERIA
- ✅ Deployment completes without errors
- ✅ Site loads at deployment URL
- ✅ All sections visible and functional
- ✅ No console errors in browser
- ✅ DecisionLab shows graceful "Q2 2025" message when tested

## DELIVERABLES TO USER
1. Deployment URL
2. Build logs (if any errors occurred)
3. Verification checklist status
4. Any issues encountered and how they were resolved
5. Domain connection status (yellowlights.ai)
