console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java 22 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "validateScopes(String;Collection<String>)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "validateExpiration(String;Long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "validateSubject(String;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "validateIssuedAt(String;Long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "validateClaimNameOverride(String;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "validateString(String;String)"
 , "c3" : "4"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class ClaimValidationUtils contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#16"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00016] For method validateScopes arguments String  scopeClaimName|Collection&lt;String &gt;  scopes"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#16"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00016] For method validateScopes list of called methods Object monObjet|String validateStringN187999"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateScopes@POLYN187474 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateScopes@POLYN187474 the MagicNumber/String  '%s value must be non-null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateScopes@POLYN187474 the MagicNumber/String  '%s value must not contain duplicates - %s already present' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method validateExpiration arguments String  claimName|Long  claimValue"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateExpiration@POLYN188866 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateExpiration@POLYN188866 the MagicNumber/String  '%s value must be non-null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateExpiration@POLYN188866 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateExpiration@POLYN188866 the MagicNumber/String  '%s value must be non-negative; value given was \'%s\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method validateSubject arguments String  claimName|String  claimValue"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method validateIssuedAt arguments String  claimName|Long  claimValue"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateIssuedAt@POLYN190463 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateIssuedAt@POLYN190463 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateIssuedAt@POLYN190463 the MagicNumber/String  '%s value must be null or non-negative; value given was \'%s\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method validateClaimNameOverride arguments String  name|String  value"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method validateString arguments String  name|String  value"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateString@POLYN191633 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateString@POLYN191633 the MagicNumber/String  '%s value must be non-null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateString@POLYN191633 the MagicNumber/String  '%s value must be non-empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateString@POLYN191633 the MagicNumber/String  '%s value must not contain only whitespace' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
