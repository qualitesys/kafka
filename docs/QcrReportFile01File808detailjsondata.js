console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java 20 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#55"
 , "c1" : "Set&lt;String&gt;"
 , "c2" : "validateScopes(String;Collection&lt;String&gt;)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00090"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#90"
 , "c1" : "long"
 , "c2" : "validateExpiration(String;Long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00118"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#118"
 , "c1" : "String"
 , "c2" : "validateSubject(String;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00138"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#138"
 , "c1" : "Long"
 , "c2" : "validateIssuedAt(String;Long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00163"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#163"
 , "c1" : "String"
 , "c2" : "validateClaimNameOverride(String;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00167"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#167"
 , "c1" : "String"
 , "c2" : "validateString(String;String)"
 , "c3" : "4"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method validateScopes arguments String  scopeClaimName|Collection&lt;String &gt;  scopes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateScopes@POLYN174282 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateScopes@POLYN174282 the MagicNumber/String  '%s value must be non-null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateScopes@POLYN174282 the MagicNumber/String  '%s value must not contain duplicates - %s already present' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method validateExpiration arguments String  claimName|Long  claimValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateExpiration@POLYN175676 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateExpiration@POLYN175676 the MagicNumber/String  '%s value must be non-null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateExpiration@POLYN175676 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateExpiration@POLYN175676 the MagicNumber/String  '%s value must be non-negative; value given was \'%s\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method validateSubject arguments String  claimName|String  claimValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00138] For method validateIssuedAt arguments String  claimName|Long  claimValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateIssuedAt@POLYN177273 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateIssuedAt@POLYN177273 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateIssuedAt@POLYN177273 the MagicNumber/String  '%s value must be null or non-negative; value given was \'%s\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method validateClaimNameOverride arguments String  name|String  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method validateString arguments String  name|String  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateString@POLYN178443 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateString@POLYN178443 the MagicNumber/String  '%s value must be non-null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateString@POLYN178443 the MagicNumber/String  '%s value must be non-empty' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.security.oauthbearer.secured.ClaimValidationUtils.validateString@POLYN178443 the MagicNumber/String  '%s value must not contain only whitespace' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ClaimValidationUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
