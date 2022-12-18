console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java 33 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AuthenticateCallbackHandler"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00184"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#184"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>;String;List<AppConfigurationEntry>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00195"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#195"
 , "c1" : "void"
 , "c2" : "init(AccessTokenRetriever;AccessTokenValidator)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00212"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#212"
 , "c1" : "AccessTokenRetriever"
 , "c2" : "getAccessTokenRetriever()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00217"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#217"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00228"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#228"
 , "c1" : "void"
 , "c2" : "handle(Callback[])"
 , "c3" : "6"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00242"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#242"
 , "c1" : "void"
 , "c2" : "handleTokenCallback(OAuthBearerTokenCallback)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00255"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#255"
 , "c1" : "void"
 , "c2" : "handleExtensionsCallback(SaslExtensionsCallback)"
 , "c3" : "5"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00288"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#288"
 , "c1" : "void"
 , "c2" : "checkInitialized()"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#184"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00184] For method configure arguments Map&lt;String ,? &gt;  configs|String  saslMechanism|List&lt;AppConfigurationEntry &gt;  jaasConfigEntries"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#184"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00184] For method configure list of called methods Object monObjet|java.util.Map&lt;java.lang.String,java.lang.Object&gt; JaasOptionsUtils_getOptionsN197388|org.apache.kafka.common.security.oauthbearer.secured.AccessTokenRetriever AccessTokenRetrieverFactory_createN197504|org.apache.kafka.common.security.oauthbearer.secured.AccessTokenValidator AccessTokenValidatorFactory_createN197642"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00195] For method init arguments AccessTokenRetriever  accessTokenRetriever|AccessTokenValidator  accessTokenValidator"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#195"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00195] The argument accessTokenRetriever is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.init@POLYN197843 the MagicNumber/String  'The OAuth login configuration encountered an error when initializing the AccessTokenRetriever' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.init@POLYN197843 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.close@POLYN198470 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.close@POLYN198470 the MagicNumber/String  'The OAuth login configuration encountered an error when closing the AccessTokenRetriever' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#228"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00228] For method handle arguments Callback[]  callbacks"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00232] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00233] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00234] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00235] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#242"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00242] For method handleTokenCallback arguments OAuthBearerTokenCallback  callback"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#242"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00242] For method handleTokenCallback list of called methods Object monObjet|java.lang.String accessTokenRetriever_retrieveN199574"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#242"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00242] The argument callback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleTokenCallback@POLYN199425 the MagicNumber/String  'invalid_token' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleTokenCallback@POLYN199425 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#255"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00255] For method handleExtensionsCallback arguments SaslExtensionsCallback  callback"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#255"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00255] For method handleExtensionsCallback list of called methods Object monObjet|java.lang.String String_valueOfN200909"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#255"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00255] The argument callback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00261] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00266] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00267] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00269] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00270] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.checkInitialized@POLYN201522 the MagicNumber/String  'To use %s, first call the configure or init method' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleTokenCallback@POLYN199425"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.close@POLYN198470"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00251] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleTokenCallback@POLYN199425 the MagicNumber/String 'invalid_token' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00251] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleTokenCallback@POLYN199425 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#218"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00218] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.close@POLYN198470 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00222] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.close@POLYN198470 the MagicNumber/String 'The OAuth login configuration encountered an error when closing the AccessTokenRetriever' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
