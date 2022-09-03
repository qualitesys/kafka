console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java 24 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "CloseableVerificationKeyResolver"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "RefreshingHttpsJwksVerificationKeyResolver"
 , "c2" : "RefreshingHttpsJwksVerificationKeyResolver(RefreshingHttpsJwks)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "init()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Key"
 , "c2" : "resolveKey(JsonWebSignature;List<JsonWebStructure>)"
 , "c3" : "4"
 , "c4" : "14"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
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
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class RefreshingHttpsJwksVerificationKeyResolver contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.init@POLYN165117 the MagicNumber/String  'init started' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.init@POLYN165117 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.init@POLYN165117 the MagicNumber/String  'init completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.close@POLYN165474 the MagicNumber/String  'close started' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.close@POLYN165474 the MagicNumber/String  'close completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method resolveKey arguments JsonWebSignature  jws|List&lt;JsonWebStructure &gt;  nestingContext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument jws is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.resolveKey@POLYN165771 the MagicNumber/String  'Please call init() first' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.resolveKey@POLYN165771 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.resolveKey@POLYN165771 the MagicNumber/String  'Refreshing JWKs from {} as no suitable verification key for JWS w/ header {} was found in {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.resolveKey@POLYN165771 the MagicNumber/String  'Unable to find a suitable verification key for JWS w/ header ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.resolveKey@POLYN165771 the MagicNumber/String  ' from JWKs ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.resolveKey@POLYN165771 the MagicNumber/String  ' obtained from ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.resolveKey@POLYN165771 the MagicNumber/String  'Unable to find a suitable verification key for JWS w/ header ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.resolveKey@POLYN165771 the MagicNumber/String  ' due to an unexpected exception (' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.resolveKey@POLYN165771 the MagicNumber/String  ') while obtaining or using keys from JWKS endpoint at ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.close@POLYN165474"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.init@POLYN165117"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00052] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.close@POLYN165474 the MagicNumber/String 'close started' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00056] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.close@POLYN165474 the MagicNumber/String 'close completed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00039] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.init@POLYN165117 the MagicNumber/String 'init started' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00043] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.init@POLYN165117 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/RefreshingHttpsJwksVerificationKeyResolver.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00045] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.RefreshingHttpsJwksVerificationKeyResolver.init@POLYN165117 the MagicNumber/String 'init completed' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
