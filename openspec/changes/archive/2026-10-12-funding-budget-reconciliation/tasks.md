# Tasks: Resolve ArvaCore Funding Budget Inconsistency

## 1. Budget Audit

- [x] 1.1 Verify all budget calculations in `lib/whitepaper-data.ts` against code comments
- [x] 1.2 Confirm ArvaNode subtotal: ₱1,016 (150+170+55+29+299+28+185+100)
- [x] 1.3 Confirm ArvaNet subtotal: ₱3,410 (299+300+750+675+79+299+80+89+680+59+100)
- [x] 1.4 Confirm combined supplied subtotal: ₱4,426
- [x] 1.5 Confirm estimated deployment subtotal: ₱13,574
- [x] 1.6 Confirm total expenses: ₱18,000 (4,426+13,574)
- [x] 1.7 Confirm budget headroom: ₱7,000 (25,000-18,000)

## 2. Identify Inconsistencies

- [x] 2.1 Find README.md outdated "₱15,000–₱20,000" range
- [x] 2.2 Note FundraisingSection.tsx unclear headroom explanation
- [x] 2.3 Confirm no code logic issues exist

## 3. Documentation Updates

- [x] 3.1 Update README.md funding target from "₱15,000–₱20,000" to "₱25,000"
- [x] 3.2 Update FundraisingSection.tsx headroom explanation
- [x] 3.3 Verify no old funding ranges remain

## 4. Build & Validation

- [x] 4.1 Run `npm run build` - Pass with 0 errors, 0 warnings
- [x] 4.2 Run `npm run lint` - Pass with 0 errors, 0 warnings
- [x] 4.3 Verify budget calculations match documentation

## 5. OpenSpec Archival

- [x] 5.1 Create change directory: `openspec/changes/2026-10-12-funding-budget-reconciliation/`
- [x] 5.2 Write spec.md documenting all findings and changes
- [x] 5.3 Write tasks.md documenting completed tasks

## Summary

Budget system was mathematically correct. Only documentation inconsistencies needed fixing:
- README.md outdated funding range → Updated to ₱25,000
- FundraisingSection.tsx unclear headroom → Clarified as "Target − Expenses"

Total expenses (₱18,000) < Target (₱25,000) = Headroom (₱7,000) ✓
