console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java 14 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AccessTokenValidator"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#37"
 , "c1" : "ValidatorAccessTokenValidator"
 , "c2" : "ValidatorAccessTokenValidator(Integer;Set<String>;String;VerificationKeyResolver;String;String)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#68"
 , "c1" : "OAuthBearerToken"
 , "c2" : "validate(String)"
 , "c3" : "5"
 , "c4" : "19"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator.ValidatorAccessTokenValidator@POLYN180051 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator.ValidatorAccessTokenValidator@POLYN180051 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator.ValidatorAccessTokenValidator@POLYN180051 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator.ValidatorAccessTokenValidator@POLYN180051 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method validate arguments String  accessToken"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00068] For method validate list of called methods Object monObjet|java.util.Set&lt;java.lang.String&gt; ClaimValidationUtils_validateScopesN183183|long ClaimValidationUtils_validateExpirationN183299|java.lang.String ClaimValidationUtils_validateSubjectN183513|java.lang.Long ClaimValidationUtils_validateIssuedAtN183629"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator.validate@POLYN181463 the MagicNumber/String  'Could not validate the access token: %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator.validate@POLYN181463 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator.validate@POLYN181463 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator.validate@POLYN181463 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator.validate@POLYN181463 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#111"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00111] The argument supplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator the MagicNumber/String  'getClaim - {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.security.oauthbearer.secured.ValidatorAccessTokenValidator the MagicNumber/String  'Could not extract the '%s' claim from the access token' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/ValidatorAccessTokenValidator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
