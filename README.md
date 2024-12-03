This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

add database tables
CREATE TABLE `tbl_lab_item`  (
  `labItemId` int(3) NOT NULL AUTO_INCREMENT,
  `labItemName` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `labTypeId` int(2) NULL DEFAULT NULL,
  PRIMARY KEY (`labItemId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

INSERT INTO `tbl_lab_item` VALUES (1, 'CBC', 1);
INSERT INTO `tbl_lab_item` VALUES (2, 'Creatinine', 1);
INSERT INTO `tbl_lab_item` VALUES (3, 'Lipid Profile', 1);
INSERT INTO `tbl_lab_item` VALUES (4, 'Cholesterol', 1);
INSERT INTO `tbl_lab_item` VALUES (5, 'Triglyceride', 1);
INSERT INTO `tbl_lab_item` VALUES (6, 'HDL', 1);
INSERT INTO `tbl_lab_item` VALUES (7, 'LDL', 1);
INSERT INTO `tbl_lab_item` VALUES (8, 'Urine Albumine/Sugar', 1);
INSERT INTO `tbl_lab_item` VALUES (9, 'Glucose', 1);
INSERT INTO `tbl_lab_item` VALUES (10, 'Uric Acid', 1);
INSERT INTO `tbl_lab_item` VALUES (11, 'CBC', 2);
INSERT INTO `tbl_lab_item` VALUES (12, 'Creatinine', 2);
INSERT INTO `tbl_lab_item` VALUES (13, 'Lipid Profile', 2);
INSERT INTO `tbl_lab_item` VALUES (14, 'Cholesterol', 2);
INSERT INTO `tbl_lab_item` VALUES (15, 'Triglyceride', 2);
INSERT INTO `tbl_lab_item` VALUES (16, 'HDL', 2);
INSERT INTO `tbl_lab_item` VALUES (17, 'LDL', 2);
INSERT INTO `tbl_lab_item` VALUES (18, 'HbA1C', 2);
INSERT INTO `tbl_lab_item` VALUES (19, 'Urine Micro Albumine', 2);
INSERT INTO `tbl_lab_item` VALUES (20, 'Uric Acid', 2);
INSERT INTO `tbl_lab_item` VALUES (21, 'CBC', 3);
INSERT INTO `tbl_lab_item` VALUES (22, 'OF', 3);
INSERT INTO `tbl_lab_item` VALUES (23, 'DCIP', 3);
INSERT INTO `tbl_lab_item` VALUES (24, 'HBsAg', 3);
INSERT INTO `tbl_lab_item` VALUES (25, 'Anti-HIV', 3);
INSERT INTO `tbl_lab_item` VALUES (26, 'VDRL', 3);
INSERT INTO `tbl_lab_item` VALUES (27, 'Blood Group', 3);
INSERT INTO `tbl_lab_item` VALUES (28, 'Rh', 3);
INSERT INTO `tbl_lab_item` VALUES (29, 'CBC', 4);
INSERT INTO `tbl_lab_item` VALUES (30, 'Anti-HIV', 4);
INSERT INTO `tbl_lab_item` VALUES (31, 'VDRL', 4);
INSERT INTO `tbl_lab_item` VALUES (32, 'OF', 5);
INSERT INTO `tbl_lab_item` VALUES (33, 'DCIP', 5);

CREATE TABLE `tbl_lab_type`  (
  `labTypeId` int(3) NOT NULL AUTO_INCREMENT,
  `labTypeName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `labSex` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`labTypeId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

INSERT INTO `tbl_lab_type` VALUES (1, 'HT', '1,2');
INSERT INTO `tbl_lab_type` VALUES (2, 'DM', '1,2');
INSERT INTO `tbl_lab_type` VALUES (3, 'ANC LAB 1', '2');
INSERT INTO `tbl_lab_type` VALUES (4, 'ANC LAB 2', '2');
INSERT INTO `tbl_lab_type` VALUES (5, 'ANC สามี', '1');

CREATE TABLE `jhcisdb`.`tbl_org`  (
  `orgId` int(2) NOT NULL AUTO_INCREMENT,
  `orgName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `orgShortName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `orgAddress` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `orgDocNo` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`orgId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

INSERT INTO `tbl_org` VALUES (1, 'โรงพยาบาลส่งเสริมสุขภาพตำบลปะลุกาสาเมาะ', 'รพ.สต.ปะลุกาสาเมาะ', 'อ.บาเจาะ จ.นราธิวาส 96170', 'นธ 51006.0106/');

insert user field such email, telephone

=============================================
BUILD DOCKER IMAGE
1-modify db info into db.js file
2.docker build -t lab:1.0.0 .
3.docker run -d -p 3000:3000 --name lab lab:1.0.0
4.docker update --restart=always lab
