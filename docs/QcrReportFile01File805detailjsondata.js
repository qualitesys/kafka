console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java 12 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.secured.AccessTokenValidatorFactory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.secured.AccessTokenValidatorFactory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "AccessTokenValidator"
 , "c2" : "create(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "AccessTokenValidator"
 , "c2" : "create(Map<String,?>;String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "AccessTokenValidator"
 , "c2" : "create(Map<String,?>;VerificationKeyResolver)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "AccessTokenValidator"
 , "c2" : "create(Map<String,?>;String;VerificationKeyResolver)"
 , "c3" : "2"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
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
 , "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class AccessTokenValidatorFactory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00020] For method create arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.common.security.oauthbearer.secured.AccessTokenValidatorFactory.create@POLYN149705 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method create arguments Map&lt;String ,? &gt;  configs|String  saslMechanism"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method create arguments Map&lt;String ,? &gt;  configs|VerificationKeyResolver  verificationKeyResolver"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.common.security.oauthbearer.secured.AccessTokenValidatorFactory.create@POLYN150455 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method create arguments Map&lt;String ,? &gt;  configs|String  saslMechanism|VerificationKeyResolver  verificationKeyResolver"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00036] For method create list of called methods Object monObjet|Integer cu_validateIntegerN151386|String cu_validateStringN151504|String cu_validateStringN151622|String cu_validateStringN151716"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.common.security.oauthbearer.secured.AccessTokenValidatorFactory.create@POLYN150701 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.security.oauthbearer.secured.AccessTokenValidatorFactory.create@POLYN150701 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.security.oauthbearer.secured.AccessTokenValidatorFactory.create@POLYN150701 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/AccessTokenValidatorFactory.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.security.oauthbearer.secured.AccessTokenValidatorFactory.create@POLYN150701 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
