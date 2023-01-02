console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java 13 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AccessTokenValidator"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.secured.LoginAccessTokenValidator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.secured.LoginAccessTokenValidator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#71"
 , "c1" : "LoginAccessTokenValidator"
 , "c2" : "LoginAccessTokenValidator(String;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#86"
 , "c1" : "OAuthBearerToken"
 , "c2" : "validate(String)"
 , "c3" : "5"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00126"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#126"
 , "c1" : "Object"
 , "c2" : "getClaim(Map<String,Object>;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.svg" }

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
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method validate arguments String  accessToken"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00086] For method validate list of called methods Object monObjet|java.lang.Object getClaimN164297|java.util.Set ClaimValidationUtils_validateScopesN165235|long ClaimValidationUtils_validateExpirationN165351|java.lang.String ClaimValidationUtils_validateSubjectN165581|java.lang.Long ClaimValidationUtils_validateIssuedAtN165697"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.security.oauthbearer.secured.LoginAccessTokenValidator.validate@POLYN163672 the MagicNumber/String  'Could not validate the access token: %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.security.oauthbearer.secured.LoginAccessTokenValidator.validate@POLYN163672 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.security.oauthbearer.secured.LoginAccessTokenValidator.validate@POLYN163672 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.security.oauthbearer.secured.LoginAccessTokenValidator.validate@POLYN163672 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.common.security.oauthbearer.secured.LoginAccessTokenValidator.validate@POLYN163672 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.common.security.oauthbearer.secured.LoginAccessTokenValidator.validate@POLYN163672 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.common.security.oauthbearer.secured.LoginAccessTokenValidator.validate@POLYN163672 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method getClaim arguments Map&lt;String ,Object &gt;  payload|String  claimName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00126] For method getClaim list of called methods Object monObjet|V payload_getN166278"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#126"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00126] The argument payload is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.common.security.oauthbearer.secured.LoginAccessTokenValidator.getClaim@POLYN166119 the MagicNumber/String  'getClaim - {}: {}' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/LoginAccessTokenValidator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
